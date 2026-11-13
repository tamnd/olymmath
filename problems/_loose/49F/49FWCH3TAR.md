---
tag: 49FWCH3TAR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077912
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78517
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Joe is given a permutation $p = (a_1, a_2, a_3, a_4, a_{5})$ of $(1, 2, 3, 4, 5)$ . A *swap* is an ordered pair $(i, j)$ with $1 \le i < j \le 5$ , and this allows Joe to swap the positions $i$ and $j$ in the permutation. For example, if Joe starts with the permutation $(1, 2, 3, 4, 5)$ , and uses the swaps $(1, 2)$ and $(1, 3)$ , the permutation becomes
$$(1, 2, 3, 4, 5) \rightarrow (2, 1, 3, 4, 5) \rightarrow (3, 1, 2, 4, 5). $$Out of all $\tbinom{5}{2} = 10$ swaps, Joe chooses $4$ of them to be in a set of swaps $S$ . Joe notices that from $p$ he could reach any permutation of $(1, 2, 3, 4, 5)$ using only the swaps in $S$ . How many different sets are possible?

*Proposed by Yang Liu*
