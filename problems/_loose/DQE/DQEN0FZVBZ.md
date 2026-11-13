---
tag: DQEN0FZVBZ
kind: problem
type: answer
answer: "176"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261753
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the natural implementation of computing Fibonacci numbers:

\begin{tabular}{l}
1: \textbf{FUNCTION} $\text{FIB}(n)$: \\
2:$ $ \textbf{IF} $n = 0$ \textbf{OR} $n = 1$ \textbf{RETURN} 1 \\
3:$ $ \textbf{RETURN} $\text{FIB}(n-1) + \text{FIB}(n-2)$
\end{tabular}

When $\text{FIB}(10)$ is evaluated, how many recursive calls to $\text{FIB}$ occur?
