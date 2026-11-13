---
tag: 2KEPM4SFK1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function
$$f(x)=\begin{cases}
\ 2+x^3 & \text{if}\ x<1\\
3x & \text{if}\ x>1 \\
\end{cases}$$

Is differentiable on $(-1,2)$ and continuous on $[-1,2]$ and thus satisfies $MVT$ for derivatives. Find a value of $x$ which is guaranteed to exist by the theorem.
