---
tag: KAKQ80YGXS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220067
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $D=\{ z \in \mathbb{C} : \operatorname{Im}(z) >0 , \operatorname{Re}(z) >0 \} $. Let $n \geq 1 $ and let $a_1,a_2,\dots a_n \in D$ be distinct complex numbers.
Define $$f(z)=z \cdot \prod_{j=1}^{n} \frac{z-a_j}{z-\overline{a_j}}$$
Prove that $f'$ has at least one root in $D$.

*Proposed by Géza Kós (Lorand Eotvos University, Budapest)*
