---
tag: 16DAYA5HAY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791437
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=138
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203787
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
Let a tree on $mn + 1$ vertices be $(m,n)$ -nice if the following conditions hold:

- $m + 1$ colors are assigned to the nodes of the tree
- for the first $m$ colors, there will be exactly $n$ nodes of color $i$ $(1\le i \le m)$
- the root node of the tree will be the unique node of color $m+1$ . \item the $(m,n)$ -nice trees must also satisfy the condition that for any two non-root nodes $i, j$ , if the color of $i$ equals the color of $j$ , then the color of the parent of $i$ equals the color of the parent of $j$ .
- Nodes of the same color are considered indistinguishable (swapping any two of them results in the same tree).

Let $N(u,v,l)$ denote the number of $(u,v)$ -nice trees with $l$ leaves. Note that $N(2,2,2) = 2, N(2,2,3) = 4, N(2,2,4) = 6$ . Compute the remainder when $\sum_{l = 123}^{789} N(8,101,l)$ is divided by $101$ .

Definition: Any rooted, ordered tree consists of some set of nodes, each of which has a (possibly empty) ordered list of children. Each node is the child of exactly one other node, with the exception of the root, which has not parent. There also cannot be any cycles of nodes which are all linearly children of each other.

*Proposed by Advait Nene*
