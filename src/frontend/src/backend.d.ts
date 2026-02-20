import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface FormEntry {
    service: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getAllEntries(): Promise<Array<FormEntry>>;
    submitEntry(name: string, email: string, phone: string, service: string, message: string): Promise<void>;
}
