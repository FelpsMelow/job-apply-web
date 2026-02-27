import Select from "../../atoms/select/Select";
import FileDropzone from "../fileDropZone/FileDropzone";
import Button from "../../atoms/button/Button";
import { useSideBar } from "../../../contexts/sideBar.context";
import "./task-upload-card.scss";

type Option = { label: string; value: string };

type TasksUploadCardProps = {
    onClickBtnUploadCard: () => void
    onSelectedFile: (file: File | null) => void;
    status: boolean;
};

export default function TasksUploadCard({
    onClickBtnUploadCard,
    onSelectedFile,
    status,
}: TasksUploadCardProps) {
    const { sideBarOptions, sideBarSelectedOptions, setSideBarSelectedOptions } = useSideBar();

    const constructionCompanyId = sideBarSelectedOptions.constructionCompanies;
    const projectId = sideBarSelectedOptions.construction;

    const constructionCompaniesOptions: Option[] = [
        { label: "Selecionar Construtora", value: "" },
        ...(sideBarOptions?.constructionCompanies ?? []).map((cc) => ({
            label: cc.name,
            value: cc.id,
        })),
    ];

    const selectedCompany = sideBarOptions?.constructionCompanies.find(
        (cc) => cc.id === constructionCompanyId
    );

    const projectsOptions: Option[] = [
        { label: "Selecionar Obra", value: "" },
        ...(selectedCompany?.projects ?? []).map((p) => ({
            label: p.name,
            value: p.id,
        })),
    ];

    function onChangeConstructionCompany(nextId: string) {
        setSideBarSelectedOptions((prev) => ({
            ...prev,
            constructionCompanies: nextId,
            construction: "",
        }));
    }

    function onChangeProject(nextId: string) {
        setSideBarSelectedOptions((prev) => ({
            ...prev,
            construction: nextId,
        }));
    }

    const canPreview = Boolean(status && constructionCompanyId && projectId);

    return (
        <section className="task-upload-card">
            <FileDropzone onFileSelected={onSelectedFile} />

            <div className="task-upload-card__filters">
                <Select
                    variant="secondary"
                    options={constructionCompaniesOptions}
                    value={constructionCompanyId}
                    onChange={(e) => onChangeConstructionCompany(e.target.value)}
                    disabled={!status}
                />

                <Select
                    variant="secondary"
                    options={projectsOptions}
                    value={projectId}
                    onChange={(e) => onChangeProject(e.target.value)}
                    disabled={!constructionCompanyId || !status}
                />

                <Button
                    onClick={onClickBtnUploadCard}
                    disabled={!canPreview}
                >
                    Pré-visualizar arquivo
                </Button>
            </div>
        </section>
    );
}
