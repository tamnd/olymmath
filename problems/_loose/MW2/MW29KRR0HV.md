---
tag: MW29KRR0HV
kind: problem
type: answer
answer: \frac{k-1+\sqrt{(n-1)k^{2}+1}}{nk^{2}}=\frac{5}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the height of the hollow be $H$. Then the speed of Vinni before the first impact is $V_{I}=\sqrt{2 g H}$.

In the second case: before the impact, Puh has a speed of $V_{1}=\sqrt{2 g h}, h=H / n$. After the impact, it becomes $V_{1}^{\prime}=\frac{1}{k} \sqrt{2 g h}$. When approaching the ground, the speed will be $V_{I I}=\sqrt{\frac{1}{k^{2}} 2 g h+2 g(H-h)}$.

The damage Puh receives the first time is $I_{I}=M V_{I} \tau$, where $M$ is the mass of the bear, and $\tau$ is the duration of the impact. In the second case, we have $I_{I I}=M \tau\left[\left(V_{1}-\right.\right.$ $\left.\left.V_{1}^{\prime}\right)+V_{I I}\right]$

Finally, $I_{I I} / I_{I}=\frac{k-1}{\sqrt{n} k}+\sqrt{\frac{(n-1) k^{2}+1}{n k^{2}}}=\frac{5}{4}$.
