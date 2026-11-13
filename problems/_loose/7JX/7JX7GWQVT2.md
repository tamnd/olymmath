---
tag: 7JX7GWQVT2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To be proven, for the angles $A, B, C$ of a plane triangle:

$$
\left|\begin{array}{ccc}
-\cos \frac{B-C}{B^{2}} & \sin \frac{A}{2} & \sin \frac{A}{2} \\
\sin \frac{C^{2}-A}{2} & -\cos \frac{C^{2}}{C^{2}} & \sin \frac{B}{2} \\
\sin \frac{C}{2} & \sin \frac{C^{2}}{2} & -\cos \frac{A^{2}-B}{2}
\end{array}\right|=0
$$

and

$$
\left|\begin{array}{ccc}
\sin \frac{B-C}{2} & -\cos \frac{A}{2} & \cos \frac{A}{2} \\
\cos \frac{B}{2} & \sin \frac{C-A}{2} & -\cos \frac{B}{2} \\
-\cos \frac{C}{2} & \cos \frac{C}{2} & \sin \frac{A-B}{2}
\end{array}\right|=0
$$
