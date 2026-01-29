"use client";

import { useEffect, useRef, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

declare global {
    interface Window {
        webkitSpeechRecognition: any;
    }
}

type VoiceDialogProps = {
    open: boolean;
    onOpenChange: (v: boolean) => void;
    onResult: (text: string) => void;
};

export function VoiceModal({ open, onOpenChange, onResult }: VoiceDialogProps) {
    const [previewText, setPreviewText] = useState("");
    const finalTextRef = useRef("");

    useEffect(() => {
        if (!open || !("webkitSpeechRecognition" in window)) return;

        setPreviewText("");
        finalTextRef.current = "";

        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = "ru-RU"; // uz-UZ / en-US
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onresult = (e: any) => {
            let interim = "";

            for (let i = e.resultIndex; i < e.results.length; i++) {
                const result = e.results[i];
                if (result.isFinal) {
                    finalTextRef.current += result[0].transcript + " ";
                } else {
                    interim += result[0].transcript;
                }
            }

            setPreviewText(finalTextRef.current + interim);
        };

        recognition.onend = () => {
            const finalText = finalTextRef.current.trim();
            if (finalText) onResult(finalText);
            onOpenChange(false);
        };

        recognition.start();

        return () => recognition.stop();
    }, [open]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-xl bg-[#202020] text-white border-none">
                <DialogHeader>
                    <DialogTitle className="text-lg">
                        {previewText || "Говорите..."}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex justify-center py-14">
                    <Button
                        type="button"
                        className="h-20 w-20 rounded-full bg-red-600 hover:bg-red-700 [&_svg:not([class*='size-'])]:size-6"
                    >
                        <Mic />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default VoiceModal;
