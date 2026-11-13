---
tag: 1FPWZP275W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 USA IMO Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3462251
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3012
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0009.parquet#row=389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: us-tst/2025
    source: hf-ai-mo-aops
    label: 2025 USA IMO Team Selection Test
---
Let $A_1A_2\dotsm A_{2025}$ be a convex 2025-gon, and let $A_i = A_{i+2025}$ for all integers $i$ . Distinct points $P$ and $Q$ lie in its interior such that $\angle A_{i-1}A_iP = \angle QA_iA_{i+1}$ for all $i$ . Define points $P^{j}_{i}$ and $Q^{j}_{i}$ for integers $i$ and positive integers $j$ as follows:

- For all $i$ , $P^1_i = Q^1_i = A_i$ .
- For all $i$ and $j$ , $P^{j+1}_{i}$ and $Q^{j+1}_i$ are the circumcenters of $PP^j_iP^j_{i+1}$ and $QQ^j_iQ^{j}_{i+1}$ , respectively.

Let $\mathcal{P}$ and $\mathcal{Q}$ be the polygons $P^{2025}_{1}P^{2025}_{2}\dotsm P^{2025}_{2025}$ and $Q^{2025}_{1}Q^{2025}_{2}\dotsm Q^{2025}_{2025}$ , respectively.

- Prove that $\mathcal{P}$ and $\mathcal{Q}$ are cyclic.
- Let $O_P$ and $O_Q$ be the circumcenters of $\mathcal{P}$ and $\mathcal{Q}$ , respectively. Assuming that $O_P\neq O_Q$ , show that $O_PO_Q$ is parallel to $PQ$ .

*Ruben Carpenter*
