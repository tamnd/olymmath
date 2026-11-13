---
tag: DMEQZBEW0X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=94
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
There are $n$ lists of candidates taking part in elections. Let $h_i$ be the total number of votes given for the candidates of the $i$th list. There are $M$ seats in the representative assembly.

Anna proposes the following system for delivering mandates: For each list, one computes a reference number $v_i = \frac{h_i}{a_i + 1}$ where $a_i$ is the number of mandates already given to the $i$th list (initially $a_i = 0$, i.e., the reference number of each list equals its number of votes). On every step ($M$ times in total), one chooses the list with the greatest reference number (if several lists share the first place, one of them is chosen randomly) and adds one mandate to this list, after which the reference number of this list is recomputed.

Bert's idea for delivering mandates is to multiply the number of votes of every list by $M/K$ where $K = h_1 + \dots + h_n$, whereby fractional results are rounded downwards. As rounding may cause some seats to be undelivered, he proposes multiplying all numbers of votes of the lists by some suitable coefficient $\beta$, so that the number of mandates given to the $i$th list would be $m_i = \lfloor \frac{\beta h_i M}{K} \rfloor$ where $m_1 + \dots + m_n = M$.

Prove that if such coefficient $\beta$ exists then Anna's and Bert's methods lead to the same distribution of mandates.
