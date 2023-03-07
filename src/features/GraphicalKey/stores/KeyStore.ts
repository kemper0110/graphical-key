import {makeAutoObservable} from "mobx";

export default class KeyStore {
    private _keys: number[] = []
    private drawing: boolean = false
    private posx: number = 0
    private posy: number = 0
    private onSubmit: (password: string) => void

    constructor(onSubmit: (password: string) => void) {
        makeAutoObservable(this)
        this.onSubmit = onSubmit;
    }

    submit() {
        this.stopDrawing();
        this.onSubmit(this.keys.join(''));
        this.clear();
    }

    getPos() {
        return [this.posx, this.posy]
    }

    setPos(x: number, y: number) {
        this.posx = x;
        this.posy = y;
    }

    startDrawing(idx: number) {
        this.drawing = true;
        this.push(idx);
    }

    stopDrawing() {
        this.drawing = false;
    }

    push(key: number) {
        if (this.drawing)
            if (this._keys.indexOf(key) === -1)
                this._keys.push(key);
    }

    isDrawing() {
        return this.drawing;
    }

    clear() {
        this._keys = [];
    }

    get keys() {
        return this._keys;
    }
}