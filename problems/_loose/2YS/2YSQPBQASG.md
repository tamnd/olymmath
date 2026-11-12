---
tag: 2YSQPBQASG
kind: problem
type: answer
answer: "2010"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
2011 Warehouses are connected by roads in such a way that from any warehouse you can drive to any other, possibly by driving along several roads. On the warehouses, there are $x_{1}, \ldots, x_{2011}$ kg of cement respectively. In one trip, you can transport an arbitrary amount of cement from any warehouse to another warehouse along the road connecting them. In the end, according to the plan, there should be $y_{1}, \ldots, y_{2011}$ kg of cement on the warehouses respectively, with

$$
x_{1}+x_{2}+\ldots+x_{2011}=y_{1}+y_{2}+\ldots+y_{2011}
$$

What is the minimum number of trips required to fulfill the plan for any values of the numbers $x_{i}$ and $y_{i}$ and any road network?

(P. Karasev)
