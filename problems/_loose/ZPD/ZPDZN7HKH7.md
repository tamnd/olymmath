---
tag: ZPDZN7HKH7
kind: problem
type: answer
answer: 31^{11}<17^{14}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73974
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Which number is larger, $2^{300}$ or $3^{200}$? Well, calculating such numbers explicitly is quite difficult, even with the help of a calculator or a computer. However, we can figure it out without explicitly calculating them! Notice:

$$
2^{300}=2^{3 \cdot 100}=\left(2^{3}\right)^{100}=8^{100}
$$

and also notice that

$$
3^{200}=3^{2 \cdot 100}=\left(3^{2}\right)^{100}=9^{100}
$$

Since $8^{100}<9^{100}$, we conclude that $2^{300}<3^{200}$.

a) Which number is larger, $2^{40}$ or $3^{28}$?

b) Which number is larger, $31^{11}$ or $17^{14}$?
