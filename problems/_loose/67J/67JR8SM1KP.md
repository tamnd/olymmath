---
tag: 67JR8SM1KP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791434
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
Let $\{\varepsilon_i\}_{i\ge 1}, \{\theta_i\}_{i\ge 0}$ be two infinite sequences of real numbers, such that $\varepsilon_i \in \{-1,1\}$ for all $i$ , and the numbers $\theta_i$ obey $$ \tan \theta_{n+1} = \tan \theta_{n}+\varepsilon_n \sec(\theta_{n})-\tan \theta_{n-1} , n \ge 1 $$ and $\theta_0 = \frac{\pi}{4}, \theta_1 = \frac{2\pi}{3}$ . Compute the sum of all possible values of $$ \lim_{m \to \infty} \left(\sum_{n=1}^m \frac{1}{\tan \theta_{n+1} + \tan \theta_{n-1}} + \tan \theta_m - \tan \theta_{m+1}\right) $$ *Proposed by Grant Yu*
