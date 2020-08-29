export interface Manipulator {
    get(): number[]
    put(input: number[])
}