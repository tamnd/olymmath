---
tag: NGXSZVQDPE
kind: problem
type: answer
answer: Area(MNK) ≥ 1/4 Area(ABC), with equality when M is the midpoint of AB.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0000.parquet#row=27
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sea $O$ el circuncentro del triángulo acutángulo $ABC$ y sea $M$ un punto arbitrario del lado $AB$. La circunferencia circunscrita al triángulo $AMO$ interseca por segunda vez a la recta $AC$ en el punto $K$ y la circunferencia circunscrita al triángulo $BOM$ interseca por segunda vez a la recta $BC$ en el punto $N$. Prueba que
$$
\text{Área}(MNK) \geq \frac{1}{4} \text{Área}(ABC)
$$
y determina el caso en que se alcanza la igualdad.
