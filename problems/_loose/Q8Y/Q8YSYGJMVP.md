---
tag: Q8YSYGJMVP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0000.parquet#row=166
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo
    source: hf-mathnet
    label: Spain International Mathematical Olympiad
---
Tenemos en el plano dos puntos diferentes, $A$ y $O$. Para cada punto $X$ del plano distinto de $O$, denotamos por $\alpha(X)$ la medida del ángulo entre $OA$ y $OX$, en radianes, y contado en sentido antihorario desde $OA$ $(0 \leq \alpha(X)<2\pi)$.

Sea $C(X)$ la circunferencia de centro $O$ y radio de longitud $OX + \frac{\alpha(X)}{OX}$. Tenemos un número finito de colores y coloreamos cada uno de los puntos del plano con ellos.

Demostrar que existe un punto $Y$ tal que $\alpha(Y)>0$ y tal que su color aparece sobre la circunferencia de $C(Y)$.
