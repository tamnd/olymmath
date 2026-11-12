---
tag: CR71QNY44M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4779
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If interest is compounded annually, then according to the compound interest formula, after 10 years, the depositor will receive an amount equal to $(1+0.05)^{10} \cdot 1000$. Similarly, if interest is compounded monthly, then after 10 years (i.e., 120 months), the depositor will receive the amount: $1000 \cdot\left(1+\frac{5}{12 \cdot 100}\right)^{120}$. We need to show that this number is greater than the first. For this, it is sufficient to show that:

$$
1+\frac{5}{100}<\left(1+\frac{5}{12 \cdot 100}\right)^{12}
$$

By the binomial theorem, the second number on the right is equal to:

$1+\frac{5}{12 \cdot 100} \cdot 12+\cdots=1+\frac{5}{100}+\cdots$, which is clearly greater than the first number.
