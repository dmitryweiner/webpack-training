export interface Component {
    w: number;
    h: number;
    enableEvents(enable: boolean): void;
}

export interface Clickable {
    onClick(): void;
}

export interface Button extends Component, Clickable {
    label: string;
}

//implementing extended interface
export class RadioButton implements Button {
    h: number;
    label: string;
    w: number;
    private enable: boolean;

    constructor(h: number, w: number, label: string) {
        this.h = h;
        this.w = w;
        this.label = label;
    }

    enableEvents(enable: boolean): void {
        this.enable = enable;
    }

    onClick(): void {
        console.log("Clicked!");
    }
}
