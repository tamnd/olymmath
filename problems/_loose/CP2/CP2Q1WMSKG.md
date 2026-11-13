---
tag: CP2Q1WMSKG
kind: problem
type: answer
answer: sqrt(2045253) - sqrt(2041210)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=399
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland IRL_ABooklet
---
Let $AOB$ be a triangle with $\angle AOB = 90^\circ$. Define a sequence of points $X_1, X_2, X_3, \dots, X_{2022}$ as follows:
* $X_1$ lies on the ray $\vec{OA}$ with $|OX_1| = 1$.
* $X_2$ lies on the ray $\vec{OB}$ with $|X_1X_2| = 2$
* For $3 \le n \le 2022$, the $X_n$ lie alternately on $\vec{OA}$ ($n$ odd) or $\vec{OB}$ ($n$ even), with $|X_{n-1}X_n| = n$.
Find the distance $|X_{2020}X_{2022}|$.
