---
tag: RT8328STYC
kind: problem
type: answer
answer: \frac{\pi^2}{18}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_0 = \frac{1}{2}$ and $a_n$ be defined inductively by
$$a_n = \sqrt{\frac{1+a_{n-1}}{2}} \text{, $n \ge 1$.} $$

- Show that for $n = 0,1,2, \ldots,$
$$a_n = \cos(\theta_n) \text{ for some $0 < \theta_n < \frac{\pi}{2}$, }$$
and determine $\theta_n$.

- Using (a) or otherwise, calculate
$$ \lim_{n \to \infty} 4^n (1 - a_n).$$
