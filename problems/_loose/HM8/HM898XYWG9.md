---
tag: HM898XYWG9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: (1) The reverse extensions of the trisectors of the two adjacent major angles (angles greater than a straight angle but less than a full angle, denoted as $\angle A, \angle B, \angle C$ for $\triangle A B C$) of each side of any $\triangle A B C$ intersect to form a regular $\triangle D_{8} E_{8} F_{8}$, and the side length is
$$
l_{\triangle D_{8} E_{8} F_{8}}=8 R \cdot \sin \left(60^{\circ}+\frac{A}{3}\right) \cdot \sin \left(60^{\circ}+\frac{B}{3}\right) \cdot \sin \left(60^{\circ}+\frac{C}{3}\right)
$$
(2) For any $\triangle A B C$, for any one major angle and the other two minor angles (angles less than a straight angle, denoted as $\angle A, \angle B, \angle C$ for $\triangle A B C$), the intersections of the trisectors (or their reverse extensions) of each adjacent pair of angles form a regular triangle, and the side lengths of the regular triangles corresponding to sides $B C, A C, A B$ are respectively
$$
\begin{array}{l}
l_{\triangle D E F_{2}}=8 R \cdot \sin \frac{B}{3} \cdot \sin \frac{C}{3} \cdot \sin \left(60^{\circ}+\frac{A}{3}\right) \\
l_{\triangle E D_{2} F_{1}}=8 R \cdot \sin \frac{A}{3} \cdot \sin \frac{C}{3} \cdot \sin \left(60^{\circ}+\frac{B}{3}\right) \\
l_{\triangle F O_{1} E_{2}}=8 R \cdot \sin \frac{A}{3} \cdot \sin \frac{B}{3} \cdot \sin \left(60^{\circ}+\frac{C}{3}\right)
\end{array}
$$

where $\triangle D E F$ is the Napoleon triangle.
