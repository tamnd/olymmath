---
tag: 6T5Z4DSWBQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261779
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the largest number of steps for $\gcd(k,76)$ to terminate over all choices of $0 < k < 76$, using the following algorithm for gcd. Give your answer in the form $(n,k)$ where $n$ is the maximal number of steps and $k$ is the $k$ which achieves this. If multiple $k$ work, submit the smallest one.

\begin{tabular}{l}
1: \textbf{FUNCTION} $\text{gcd}(a,b)$: \\
2: $ $ \textbf{IF} $a = 0$ \textbf{RETURN} $b$ \\
3: $ $ \textbf{ELSE RETURN} $\text{gcd}(b \bmod a,a)$
\end{tabular}
