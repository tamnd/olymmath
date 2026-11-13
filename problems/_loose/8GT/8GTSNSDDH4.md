---
tag: 8GTSNSDDH4
kind: problem
type: answer
answer: 8.75<n\leqslant9.25
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141563
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A trading company purchases a certain type of fruit at a cost of 20 yuan per kilogram. After market research, it is found that the selling price $p$ (yuan per kilogram) of this fruit over the next 48 days is related to time $t$ (days) by the function
$$
p=\frac{1}{4} t+30(1 \leqslant t \leqslant 48, t \in \mathbf{Z}),
$$

and the daily sales volume $y$ (kilograms) is related to time $t$ (days) by the function
$$
y=120-2 t(1 \leqslant t \leqslant 48, t \in \mathbf{Z}) \text {. }
$$

In the first 30 days of actual sales, the company decides to donate $n$ yuan of profit for every kilogram of fruit sold to a "targeted poverty alleviation" program. It is observed that: in the sales process over the first 30 days, only in the first 28 days, the daily sales profit $W$ (yuan) after deducting the donation increases with the increase in time $t$ (days). Then the range of values for $n$ is
