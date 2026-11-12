---
tag: GS5T337BGZ
kind: problem
type: answer
answer: "451"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let there be $n$ voters, and $k$ votes were cast for a given candidate. Then $0.50332 \leqslant$ $\frac{k}{n} \leqslant 0.50333$, and $1.00664 \leqslant \frac{2 k}{n} \leqslant 1.00666$. If we denote $m=2 k-n$, then $0.00664 \leqslant \frac{m}{n} \leqslant$ 0.00666.

- If $m=1$, then $150.1<\frac{1}{0.00666} \leqslant n \leqslant \frac{1}{0.00664}<150.7$ - no integer solutions.
- If $m=2$, then $300<\frac{2}{0.00666} \leqslant n \leqslant \frac{2}{0.00664}<302$. But if $n=301$ and $m=2$, then the corresponding value of $k$ does not exist.
- If $m=3$, then $450<\frac{3}{0.00666} \leqslant n \leqslant \frac{3}{0.00664}<452$. Therefore, $n=451, k=227$, and all inequalities are satisfied.
