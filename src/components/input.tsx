import { JSX } from "preact";
import { TargetedEvent } from "preact/compat";
import { useState } from "preact/hooks";


/**
 * `Input` 컴포넌트 공통 `Props` 입니다.
 */
interface CommonInputProps<T extends string> {
  /** 초기입력값 */
  defaultValue?: T;
  /** 입력값 */
  value?: T;
  /** DOM Element에 전달될 ClassName 문자열입니다. */
  className?: string;
  /** DOM Element에 전달될 style 객체입니다. */
  style?: string | JSX.CSSProperties;
  /** 읽기전용여부 */
  readonly?: boolean;
  /** 비활성화여부 */
  disabled?: boolean;

  formatCallback?: (value: T) => string;

  /**
   * 타겟 input에서 `input` 이벤트가 감지되면 발생하는 이벤트입니다.
   * @param value 현재 `input`의 `value` 값
   * @param target 받은 `EventTarget` 초점
   * @returns 
   */
  onInput?: (value: string, target?: HTMLElement) => void;

  /**
   * 타겟 input에서 `enter` 키가 눌릴 경우 발생하는 이벤트입니다.
   * @returns 
   */
  onEnter?: () => void;

  /**
   * 타겟 input 이 포커싱될 경우 발생하는 이벤트입니다.
   * @param value 현재 `input`의 `value` 값
   * @param target 받은 `EventTarget` 초점
   * @param relatedTarget 읽어버린 `EventTarget` 초점
   * @returns 
   */
  onFocus?: (value: string, target?: HTMLElement, relatedTarget?: HTMLElement | null) => void;

  /**
   * 타켓 input 이 포커싱을 잃어버릴 경우 발생하는 이벤트입니다.
   * @param value 현재 `input`의 `value` 값
   * @param target 잃어버린 `EventTarget` 초점
   * @param relatedTarget 수신 `EventTarget` 포커스
   * @returns 
   */
  onBlur?: (value: string, target?: HTMLElement, relatedTarget?: HTMLElement | null) => void;
}

interface InputValueProps<T extends string> extends CommonInputProps<T> {
  value: T;
}

interface InputDefaultValueProps<T extends string> extends CommonInputProps<T> {
  defaultValue: T;
}

export type InputProps<T extends string> = InputValueProps<T> | InputDefaultValueProps<T>;

export function Input<T extends string>({
  defaultValue,
  value: PropValue,
  disabled,
  readonly,
  formatCallback = (value: T) => value.toString(),

  onInput = () => void (0),
  onEnter = () => void (0),
  onBlur = () => void (0),
  onFocus = () => void (0)
}: InputProps<T>) {

  const [innerValue, setInnerValue] = useState<T>((defaultValue || "") as T);

  const isDefaultValue = typeof defaultValue !== "undefined";

  const value: T = (() => {
    if (typeof PropValue !== "undefined") return PropValue;
    return innerValue;
  })();


  const focusHandler = (e: FocusEvent) => {
    onFocus(value, e.target as HTMLElement, e.relatedTarget as HTMLElement | null);
  };

  const blurHandler = (e: FocusEvent) => {
    onBlur(value, e.target as HTMLElement, e.relatedTarget as HTMLElement | null);
  };

  /** 내부 `keyup` 핸들러 입니다. */
  const keyboardHandler = (e: KeyboardEvent) => {
    const target = e.target as HTMLInputElement;

    if (document.activeElement === target) {
      if (e.key === "Enter" || e.keyCode === 13) onEnter();
    }
  };

  /** 내부 `input` 핸들러 입니다. */
  const inputHandler = (e: TargetedEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.slice(0) as T;

    if (isDefaultValue) setInnerValue(value); // `defaultValue` 사용시만 업데이트

    onInput(value);
  };


  return <input
    className="input"
    value={formatCallback(value)}
    disabled={disabled}
    readOnly={readonly}
    onFocus={focusHandler}
    onBlur={blurHandler}
    onKeyUp={keyboardHandler}
    onInput={inputHandler}
  />;
}