---
tag: SWVMZECEJE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Grouping the terms: 1 and 8, 2 and 7, 3 and 6, 4 and 5, we get: $\frac{2 x+7}{x(x+7)}-\frac{2 x+7}{(x+1)(x+6)}+\frac{2 x+7}{(x+2)(x+5)}-\frac{2 x+7}{(x+3)(x+4)}>0 \Leftrightarrow$

$\Leftrightarrow(2 x+7) \left(\frac{1}{x^{2}+7 x}-\frac{1}{x^{2}+7 x+6}+\frac{1}{x^{2}+7 x+10}-\frac{1}{x^{2}+7 x+12}\right)$

$>0 \Leftrightarrow \Leftrightarrow$

$(2 x+7)\left(\frac{3}{\left(x^{2}+7 x\right)\left(x^{2}+7 x+6\right)}+\frac{1}{\left(x^{2}+7 x+10\right)\left(x^{2}+7 x+12\right)}\right)>0 \Leftrightarrow$

$\Leftrightarrow(2 x+7) \frac{\left(x^{2}+7 x\right)^{2}+18\left(x^{2}+7 x\right)+90}{\left(x^{2}+7 x\right)\left(x^{2}+7 x+6\right)\left(x^{2}+7 x+10\right)\left(x^{2}+7 x+12\right)}>0$

Since $\left(x^{2}+7 x\right)^{2}+18\left(x^{2}+7 x\right)+90>0$ for any $x\left(\frac{D}{4}=81-900\right)$
