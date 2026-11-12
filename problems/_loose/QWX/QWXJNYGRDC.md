---
tag: QWXJNYGRDC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Let $\xi$ and $\eta$ be i.i.d. random variables with zero mean and finite variance. Prove that if

$$
\xi \stackrel{d}{=} \frac{\xi+\eta}{\sqrt{2}}
$$

then the variable $\xi$ is Gaussian.

(b) Show that the result of part (a) remains valid if

$$
\xi \stackrel{d}{=} a \xi + b \eta
$$

for some $a, b > 0$.
(c) Verify that in part (a) the conditions of zero mean and finite variance of the variable $\xi$ are already ensured by the relation $(*)$.
