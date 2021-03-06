﻿/**
 * Actionのインターフェース
 */
export interface Action<T> {
    type: string;
    payload?: T;
    error?: Error;
}
