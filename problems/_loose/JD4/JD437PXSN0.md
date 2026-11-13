---
tag: JD437PXSN0
kind: problem
type: answer
answer: f(x)=-\frac{x}{1+x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of all real numbers greater than -1, determine all functions $f: S \rightarrow S$, such that the following two conditions are satisfied:
(1) For all $x$ and $y$ in $S$, $f[x+f(y)+x \cdot f(y)]=y+f(x)+y \cdot f(x)$;
(2) In the intervals $(-1,0)$ and $(0,+\infty), \frac{f(x)}{x}$ is strictly increasing.
(IMO - 35 Problem)
