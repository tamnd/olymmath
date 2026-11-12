---
tag: MYFDGCME42
kind: problem
type: answer
answer: 4:2+3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a certain state, addition and subtraction are denoted by the signs "!" and "?", but it is unknown to you which sign corresponds to which operation. Each operation is applied to two numbers, but it is unknown to you whether subtraction involves subtracting the left number from the right or the right from the left. For example, the expression $a$ ? $b$ represents one of the following: $a-b$, $b-a$, or $a+b$. It is unknown to you how numbers are written in this state, but variables $a$, $b$, and parentheses are used as usual. Explain how to use them and the signs "!" and "?" to write an expression that is guaranteed to equal $20a-18b$.
