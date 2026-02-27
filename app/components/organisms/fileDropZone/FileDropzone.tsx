import { useRef, useState } from "react";
import DropzoneContent from "../../molecules/dropzoneContent/DropzoneContent";
import "./file-drop-zone.scss";

type DropState = "idle" | "dragging" | "error" | "success";

interface FileDropzoneProps {
    onFileSelected: (file: File | null) => void;
}

export default function FileDropzone({ onFileSelected }: FileDropzoneProps) {
    const [state, setState] = useState<DropState>("idle");
    const [fileName, setFileName] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFile(file: File | null) {
        if (!file) {
            setState("error");
            onFileSelected(null);
            return;
        }

        setState("success");
        setFileName(file.name)
        onFileSelected(file);
    }

    function onDrop(e: React.DragEvent<HTMLElement>) {
        e.preventDefault();
        handleFile(e.dataTransfer.files?.[0] ?? null);
    }

    function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleFile(e.target.files?.[0] ?? null);
        e.target.value = "";
    }

    function openFilePicker() {
        inputRef.current?.click();
    }

    return (
        <>
            <input
                ref={inputRef}
                type="file"
                accept=".xlsx,.xls"
                hidden
                onChange={onFileChange}
            />

            <section
                className={`file-dropzone ${state}`}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={() => setState("dragging")}
                onDragLeave={() => setState("idle")}
                onDrop={onDrop}
            >
                <DropzoneContent
                    onSelectFileClick={openFilePicker}
                    status={state == 'success' ? true : false}
                    fileName={fileName!}
                />
            </section>
        </>
    );
}
