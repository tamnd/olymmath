---
tag: 50THK89YYM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Abelkonkurransen Finale
    url: https://artofproblemsolving.com/community/c6h3272827
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1371
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2024
    source: hf-ai-mo-aops
    label: 2024 Abelkonkurransen Finale
---
Determine the smallest constant $N$ so that the following may hold true:
Geostan has deployed secret agents in Combostan. All pairs of agents can communicate, either directly or through other agents. The distance between two agents is the smallest number of agents in a communication chain between the two agents.
Andreas and Edvard are among these agents, and Combostan has given Noah the task of determining the distance between Andreas and Edvard. Noah has a list of numbers, one for each agent. The number of an agent describes the longest of the two distances from the agent to Andreas and Edvard. However, Noah does not know which number corresponds to which agent, or which agents have direct contact.
Given this information, he can write down $N$ numbers and prove that the distance between Andreas and Edvard is one of these $N$ numbers. The number $N$ is independent of the agents' communication network.
