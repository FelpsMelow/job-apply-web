import { useState, useEffect } from "react";
import { StagesDTO } from "@/app/dtos/task.dto";
import Modal from "../../molecules/modal/Modal";
import Slider from "@mui/material/Slider";
import Text from "../../atoms/text/Text";
import { patchTaskByTaskId } from "@/app/services/api/task.service";
import { updateStepsWithNewValue } from "@/app/utils/data/updateStepsWithNewValue";
import { calculateCompletionPercentage } from "@/app/utils/calcs/calculateCompletionPercentage";
import { useTask } from "@/app/contexts/task.context";
import { Alert } from "../alerts/Alerts";
import "./measureStageModal.scss";

interface MeasureStageModal {
    isOpen: boolean;
    onClose: () => void;
    taskId: string;
    step: StagesDTO;
    steps: StagesDTO[];
}

export default function MeasureStageModal({
    isOpen,
    onClose,
    taskId,
    step,
    steps
}: MeasureStageModal) {
    const initialProgress = Math.max(0, Math.round(step.completionPercentage || 0));
    const [value, setValue] = useState<number>(initialProgress);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { updateTask } = useTask();


    useEffect(() => {
        if (isOpen) {
            setValue(initialProgress);
        }
    }, [isOpen, initialProgress, step]);

    function valuetext(value: number) {
        return `${value}%`;
    }

    const handleChange = (_event: Event, newValue: number | number[]) => {
        if (typeof newValue === "number") {
            if (newValue < initialProgress) return;
            setValue(newValue);
        }
    };

    return (
        <Modal
            title={step.name}
            isOpen={isOpen}
            isDesabled={step.completionPercentage == 100}
            isLoading={isLoading}
            onClose={onClose}
            onSave={async () => {
                try {
                    setIsLoading(true);

                    const newSteps = updateStepsWithNewValue(step._id, steps, value);
                    const newCompletion = calculateCompletionPercentage(newSteps);
                    const res = await patchTaskByTaskId(taskId, newCompletion, newSteps);

                    updateTask(taskId, res);

                    onClose();
                    Alert({type: "success", message: "Etapa atualizada com sucesso!"})
                } catch (err) {
                    console.error(err);
                    alert("Erro ao salvar medição!");
                } finally {
                    setIsLoading(false);
                }
            }}
        >
            <>
                <br />
                <div className="slider-container">
                    <Text weight="medium" mode="nowrap">{valuetext(value)}</Text>
                    <Slider
                        aria-label="Progresso da etapa"
                        value={value}
                        onChange={handleChange}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        min={0}
                        max={100}
                        sx={{
                            height: 15,
                            "& .MuiSlider-thumb": {
                                width: 25,
                                height: 25,
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                                border: "2px solid currentColor",
                                boxShadow: "none",
                                "&:hover": {
                                    boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
                                },
                            },
                            "& .MuiSlider-track": { border: "none" },
                            "& .MuiSlider-rail": { opacity: 0.3 },
                        }}
                        />
                </div>
                <br />
            </>
        </Modal>
    );
}
