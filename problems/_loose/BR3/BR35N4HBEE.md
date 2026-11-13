---
tag: BR35N4HBEE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=75
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if non-zero complex numbers $\alpha_1, \alpha_2, \alpha_3$ are distinct and noncollinear on the plane, and satisfy $\alpha_1 + \alpha_2 + \alpha_3 = 0$, then there holds
$$
\sum_{i=1}^{3} \left( \frac{|\alpha_{i+1} - \alpha_{i+2}|}{\sqrt{|\alpha_i|}} \left( \frac{1}{\sqrt{|\alpha_{i+1}|}} + \frac{1}{\sqrt{|\alpha_{i+2}|}} - \frac{2}{\sqrt{|\alpha_i|}} \right) \right) \le 0 (\star)
$$
where $\alpha_4 = \alpha_1, \alpha_5 = \alpha_2$. Verify further the sufficient and necessary condition for the equality holding in (★).
