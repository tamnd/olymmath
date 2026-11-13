---
tag: DN4X1DM4N5
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $X$ and $Y$ are angles with $\tan X=\frac{1}{m}$ and $\tan Y=\frac{a}{n}$ for some positive integers $a, m$ and $n$. Determine the number of positive integers $a \leq 50$ for which there are exactly 6 pairs of positive integers $(m, n)$ with $X+Y=45^{\circ}$.

(Note: The formula $\tan (X+Y)=\frac{\tan X+\tan Y}{1-\tan X \tan Y}$ may be useful.)
