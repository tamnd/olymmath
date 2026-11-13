---
tag: AXSP6PCD0Z
kind: problem
type: answer
answer: "376"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a certain lottery, there are 60 distinct numbers and 6 of them are drawn without replacement. Each ticket has 6 distinct numbers among the 60 possible ones. The top prize, known as the "goal-in-the-corner," is awarded to the player who has the ticket with the same 6 numbers that were drawn. In this lottery, there is also the "ball-on-the-post" prize. In a ball-on-the-post ticket, the smallest number does not have a difference, in absolute value, greater than 1 from the smallest number drawn, the second smallest number does not have a difference, in absolute value, greater than 1 from the second smallest number drawn, and so on until the sixth smallest number. For example, suppose the goal-in-the-corner ticket is $\{4,7,25,48,51,60\}$. Then the tickets $\{3,6,25,49,50,59\}$ and $\{5,6,25,47,50,60\}$ are ball-on-the-post tickets, but the ticket $\{3,4,6,24,47,50\}$ is not a ball-on-the-post ticket. It is worth noting that a goal-in-the-corner ticket is not a ball-on-the-post ticket. For the following items, consider each ticket as the selection of a sequence of 6 numbers written in ascending order.

(a) Give an example of a set of 6 numbers forming a goal-in-the-corner ticket that has the smallest number of ball-on-the-post tickets associated with it. How many ball-on-the-post tickets would there be for these 6 numbers?

(b) Give an example of a set of 6 numbers forming a goal-in-the-corner ticket that results in the largest number of ball-on-the-post tickets. In this case, how many ball-on-the-post tickets would there be?

(c) Consider the numbers drawn $\{2,3,8,11,14,17\}$, how many ball-on-the-post tickets are associated with it?

(d) Suppose the set of numbers drawn is $\{8,10,12,14,16,18\}$. In this case, how many ball-on-the-post tickets are possible associated with it?
