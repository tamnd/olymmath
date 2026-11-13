---
tag: QH7BQ3X4KF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37591
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35692
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1994
    source: hf-ai-mo-aops
    label: 1994 China Team Selection Test
---
Given $5n$ real numbers $r_i, s_i, t_i, u_i, v_i \geq 1 (1 \leq i \leq n)$ , let $R = \frac {1}{n} \sum_{i=1}^{n} r_i$ , $S = \frac {1}{n} \sum_{i=1}^{n} s_i$ , $T = \frac {1}{n} \sum_{i=1}^{n} t_i$ , $U = \frac {1}{n} \sum_{i=1}^{n} u_i$ , $V = \frac {1}{n} \sum_{i=1}^{n} v_i$ . Prove that $\prod_{i=1}^{n}\frac {r_i s_i
t_i u_i v_i + 1}{r_i s_i t_i u_i v_i - 1} \geq \left(\frac {RSTUV +1}{RSTUV - 1}\right)^n$ .
