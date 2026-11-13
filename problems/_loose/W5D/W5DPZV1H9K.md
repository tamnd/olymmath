---
tag: W5DPZV1H9K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vincent is playing a game with Evil Bill. The game uses an infinite number of red balls, an infinite number of green balls, and a very large bag. Vincent first picks two nonnegative integers $g$ and $k$ such that $g < k \le 2016$, and Evil Bill places $g$ green balls and $2016 - g$ red balls in the bag, so that there is a total of $2016$ balls in the bag. Vincent then picks a ball of either color and places it in the bag. Evil Bill then inspects the bag. If the ratio of green balls to total balls in the bag is ever exactly $\frac{k}{2016}$ , then Evil Bill wins. If the ratio of green balls to total balls is greater than $\frac{k}{2016}$ , then Vincent wins. Otherwise, Vincent and Evil Bill repeat the previous two actions (Vincent picks a ball and Evil Bill inspects the bag). If $S$ is the sum of all possible values of $k$ that Vincent could choose and be able to win, determine the largest prime factor of $S$.
