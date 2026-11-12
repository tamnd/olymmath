---
tag: BHGFCQB4F2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751012
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69691
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2012
    source: hf-ai-mo-aops
    label: 2012 BMT Spring
---
A permutation of a set is a bijection from the set to itself. For example, if $\sigma$ is the permutation $1 7\mapsto 3$ , $2 \mapsto 1$ , and $3 \mapsto 2$ , and we apply it to the ordered triplet $(1, 2, 3)$ , we get the reordered triplet $(3, 1, 2)$ . Let $\sigma$ be a permutation of the set $\{1, ... , n\}$ . Let $$ \theta_k(m) = \begin{cases} m + 1 & \text{for} \, m < k
1 & \text{for} \, m = k
m & \text{for} \, m > k\end{cases} $$ Call a finite sequence $\{a_i\}^{j}_{i=1}$ a disentanglement of $\sigma$ if $\theta_{a_j} \circ ...\circ \theta_{a_j} \circ \sigma$ is the identity permutation. For example, when $\sigma = (3, 2, 1)$ , then $\{2, 3\}$ is a disentaglement of $\sigma$ . Let $f(\sigma)$ denote the minimum number $k$ such that there is a disentanglement of $\sigma$ of length $k$ . Let $g(n)$ be the expected value for $f(\sigma)$ if $\sigma$ is a random permutation of $\{1, ... , n\}$ . What is $g(6)$ ?
