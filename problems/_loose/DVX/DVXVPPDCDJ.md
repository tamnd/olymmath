---
tag: DVXVPPDCDJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5688
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The functions on the left and right sides of the inequality are even, and on the set $[0 ;+\infty)$ they are periodic with a period of $2 \pi$. Therefore, it is sufficient to solve the inequality on the interval $[0 ; 2 \pi)$. We have

$x \in\left[0 ; \frac{\pi}{4}\right] \Rightarrow x \geqslant 2 x \Rightarrow x=0 ; x \in\left[\frac{\pi}{4} ; \frac{\pi}{2}\right] \Rightarrow x \geqslant \pi-2 x \Rightarrow x \in\left[\frac{\pi}{3} ; \frac{\pi}{2}\right] ;$

$$
\begin{aligned}
& x \in\left[\frac{\pi}{2} ; \frac{3 \pi}{4}\right] \Rightarrow \pi-x \geqslant 2 x-\pi \Rightarrow x \in\left[\frac{\pi}{2} ; \frac{2 \pi}{3}\right] \\
& x \in\left[\frac{3 \pi}{4} ; \pi\right] \Rightarrow \pi-x \geqslant 2 \pi-2 x \Rightarrow x=\pi
\end{aligned}
$$

If $x \in(\pi ; 2 \pi)$, then $\arcsin (\sin |x|)<0, \arccos |\cos 2 x| \geqslant 0$, so on this interval the inequality has no solutions. By extending the obtained solutions even-periodically over the entire number line, we get
