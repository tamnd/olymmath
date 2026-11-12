---
tag: BDA7PHBZ0F
kind: problem
type: answer
answer: \frac{2^{2}\cdot\sin^{2}^{2}}{1+^{8}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the derivative $y_{x}^{\prime}(x)$ of the functions $x(t)=\operatorname{ctg} t^{2}$, $y(t)=\operatorname{arcctg} t^{4}$.

$$
y_{x}^{\prime}(x)=\frac{\left(\operatorname{arcctg} t^{4}\right)_{t}^{\prime}}{\left(\operatorname{ctg} t^{2}\right)_{t}^{\prime}}=\frac{-\frac{1}{1+t^{8}} \cdot 4 t^{3}}{-\frac{1}{\sin ^{2} t^{2}} \cdot 2 t}=\frac{2 t^{2} \cdot \sin ^{2} t^{2}}{1+t^{8}}
$$
