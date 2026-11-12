---
tag: NRN9FHSDPD
kind: problem
type: answer
answer: 1,49,30,30or\frac{3}{4},\frac{147}{4},30,30
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10326
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\mathrm{ABCD}$ is an isosceles trapezoid, $AB = CD$, $\angle A$ is acute, $AB$ is the diameter of a circle, $M$ is the center of the circle, $P$ is the point of tangency of the circle with the side $CD$. Let the radius of the circle be $x$. Then $AM = MB = MP = x$. Let $N$ be the midpoint of side $CD$, then triangle $MPN$ is a right triangle, $\angle P = 90^\circ$, $\angle MNP = \angle A = \alpha$, $MN = \frac{x}{\sin \alpha}$. Let $K$ be the point of intersection of the circle with the base $AD$ ($K \neq A$). Triangle $ABK$ is a right triangle, $\angle K = 90^\circ$, $BK$ is the height of the trapezoid, $BK = AB \sin \alpha = 2x \sin \alpha$. $S_{ABCD} = MN \cdot BK = 2x^2 = 450 \Rightarrow x = 15$, $AB = CD = 2x = 30$.

$AK = AB \cos \alpha = 2x \cos \alpha$, $KMN D$ is a parallelogram, $KD = MN = \frac{x}{\sin \alpha}$.

$\frac{AK}{KD} = \frac{24}{25} \Rightarrow 2 \cos \alpha \sin \alpha = \frac{24}{25} \Rightarrow \sin 2\alpha = \frac{24}{25} \Rightarrow \cos 2\alpha = \pm \frac{7}{25} \Rightarrow$

1) $\sin \alpha = \sqrt{\frac{1 - \cos 2\alpha}{2}} = \frac{3}{5}$, $\cos \alpha = \sqrt{\frac{1 + \cos 2\alpha}{2}} = \frac{4}{5}$ or
2) $\sin \alpha = \frac{4}{5}$, $\cos \alpha = \frac{3}{5}$.

For the first case, we have: $AK = 2x \cos \alpha = 24$, $KD = \frac{x}{\sin \alpha} = 25$, $AD = AK + KD = 49$, $BC = 2MN - AD = 1$.

For the second case, we have: $AK = 2x \cos \alpha = 18$, $KD = \frac{x}{\sin \alpha} = \frac{75}{4}$, $AD = AK + KD = \frac{147}{4}$, $BC = 2MN - AD = \frac{3}{4}$.
