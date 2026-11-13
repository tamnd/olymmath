---
tag: YZTF8MQ84X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h5790
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39988
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2004
    source: hf-ai-mo-aops
    label: 2004 Germany Team Selection Test
---
Let $n \geq 2$ be a natural number, and let $\left( a_{1}; a_{2};\;...; a_{n}\right)$ be a permutation of $\left(1; 2;\;...; n\right)$ . For any integer $k$ with $1 \leq k \leq n$ , we place $a_k$ raisins on the position $k$ of the real number axis. [The real number axis is the $x$ -axis of a Cartesian coordinate system.]

Now, we place three children A, B, C on the positions $x_A$ , $x_B$ , $x_C$ , each of the numbers $x_A$ , $x_B$ , $x_C$ being an element of $\left\{1; 2;\;...; n\right\}$ . [It is not forbidden to place different children on the same place!]

For any $k$ , the $a_k$ raisins placed on the position $k$ are equally handed out to those children whose positions are next to $k$ . [So, if there is only one child lying next to $k$ , then he gets the raisin. If there are two children lying next to $k$ (either both on the same position or symmetric with respect to $k$ ), then each of them gets one half of the raisin. Etc..]

After all raisins are distributed, a child is unhappy if he could have received more raisins than he actually has received if he had moved to another place (while the other children would rest on their places).

For which $n$ does there exist a configuration $\left( a_{1}; a_{2};\;...; a_{n}\right)$ and numbers $x_A$ , $x_B$ , $x_C$ , such that all three children are happy?
