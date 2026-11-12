---
tag: 6308CYZAAP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1422713
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
Alice has an isosceles triangle $M_0N_0P$ , where $M_0P=N_0P$ and $\angle M_0PN_0=\alpha^{\circ}$ . (The angle is measured in degrees.) Given a triangle $M_iN_jP$ for nonnegative integers $i$ and $j$ , Alice may perform one of two *elongations*:

a) an $M$ -*elongation*, where she extends ray $\overrightarrow{PM_i}$ to a point $M_{i+1}$ where $M_iM_{i+1}=M_iN_j$ and removes the point $M_i$ .
b) an $N$ -*elongation*, where she extends ray $\overrightarrow{PN_j}$ to a point $N_{j+1}$ where $N_jN_{j+1}=M_iN_j$ and removes the point $N_j$ .

After a series of $5$ elongations, $k$ of which were $M$ -elongations, Alice finds that triangle $M_kN_{5-k}P$ is an isosceles triangle. Given that $10\alpha$ is an integer, compute $10\alpha$ .

*Proposed by Yannick Yao*
