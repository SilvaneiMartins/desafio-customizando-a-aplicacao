import React from "react";

import { Button } from "./Button";
import { SideBarHeader } from "./SideBarHeader";

interface SideBarProps {
    genres: Array<{
        id: number;
        title: string;
        name:
            | "action"
            | "comedy"
            | "documentary"
            | "drama"
            | "horror"
            | "family";
    }>;
    selectedGenreId: number;
    handleClickButton(id: number): void;
}

export function SideBar({ genres, handleClickButton, selectedGenreId }: SideBarProps) {
    return (
        <nav className="sidebar">
            <SideBarHeader />

            <div className="buttons-container">
                {genres.map((genre) => (
                    <Button
                        id={String(genre.id)}
                        className="animate-ToptoBottom btn"
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => handleClickButton(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>
        </nav>
    );
}
