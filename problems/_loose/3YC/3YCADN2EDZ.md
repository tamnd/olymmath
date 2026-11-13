---
tag: 3YCADN2EDZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178633
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there exists $\overline{a b c d}$, a four-digit number with distinct digits in base 10, with the property $\overline{a b c d}=\overline{a b}+\overline{b a}+\overline{a c}+\overline{c a}+\overline{a d}+\overline{d a}+\overline{a a}+\overline{b c}+\overline{c b}+\overline{b d}+\overline{d b}+\overline{b b}+$ $\overline{c d}+\overline{d c}+\overline{c c}+\overline{d d} \Rightarrow \Rightarrow \overline{a b c d}=44 \cdot(a+b+c+d)$. The maximum value of the sum of four distinct digits is $6+7+8+9=30$ and, since $44 \cdot 30=1320$, we deduce that $\overline{a b c d} \leq 1320 \Rightarrow a=1, b \leq 3$. Therefore, the maximum value of the sum $a+b+c+d$, while respecting the inequality, would be $1+2+8+9=20$, and since $44 \cdot 20=880 \neq \overline{a b c d}$, the assumption is false.
