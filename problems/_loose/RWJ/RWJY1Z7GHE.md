---
tag: RWJY1Z7GHE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Kingdom of Moles consists of $2023$ cities, and there are several tunnels connecting different pairs of cities. Each tunnel allows bidirectional travel, and there is at most one tunnel connecting any two distinct cities. Furthermore, it is possible to travel between any two distinct cities through a combination of several tunnels.

A pair of distinct cities $\{A, B\}$ is considered good if it satisfies the following condition for any city $C$ different from $A$ and $B$:

Let $d_{C,A}$ be the minimum number of tunnels required to travel from $C$ to $A$, and let $d_{C,B}$ be the minimum number of tunnels required to travel from $C$ to $B$. For any such pair $\{A, B\}$, it is guaranteed that regardless of the paths $X$ and $Y$ chosen to travel from $C$ to $A$ (using $d_{C,A}$ tunnels) and from $C$ to $B$ (using $d_{C,B}$ tunnels), respectively, $X$ and $Y$ do not share any common tunnel.

Find the second largest possible value for the number of good pairs of cities. Note that the pairs $\{A, B\}$ and $\{B, A\}$ are considered the same combination.
