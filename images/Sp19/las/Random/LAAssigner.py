import networkx as nx
import numpy as np
import sys

from networkx.algorithms import bipartite

def getSignEmails(fil):
	emails = []
	f = open(fil, 'r')
	f.readline()
	for line in f:
		emails.append(line.split(',')[1].strip())
	return emails

WEIGHT = []
twoUnits = []
# lessWeight = ["Tuesday 5p-7", "Thursday 5p-7", "Friday 1p-3", "Wednesday 1p-3"]
lessWeight = ["Monday 4p-6"]

csv = sys.argv[1]
csv = open(csv, 'r')

emails = getSignEmails(sys.argv[1])
print(len(emails))
labs = []
las = []
assign = {}

csv.readline()
for line in csv:
	line = line.split(',')
	if line[1] in emails:
		las.append(line[2])
		if line[9][0] == '2':
			twoUnits.append(line[2])
		labs += line[10].split(',')
		assign[line[2].strip()] = [l.strip() for l in line[10].split(',')]

labs = set([l.strip() for l in labs])
las = set([l.strip() for l in las])

B = nx.DiGraph()

B.add_nodes_from(labs, bipartite=0)
B.add_nodes_from(las, bipartite=1)

for la in las:
	for lab in labs:
		if lab in assign[la]:
			B.add_edges_from([(la, lab)], capacity=1)
	if la in twoUnits:
		B.add_edges_from([('source', la)], capacity=4)
	else:
		B.add_edges_from([('source', la)], capacity=2)

for lab in labs:
	if lab in lessWeight:
		B.add_edges_from([(lab, 'sink')], capacity=2)
	else:
		B.add_edges_from([(lab, 'sink')], capacity=6)

flow_value, flow_dict = nx.maximum_flow(B, 'source', 'sink')

assignments = {}
lasAssign = {}
for match in flow_dict:
	if match in las:
		t = flow_dict[match]
		ls = []
		for l in t:
			if t[l] == 1:
				if not (l in assignments):
					assignments[l] = []
				assignments[l].append(match)
				ls.append(l)
		lasAssign[match] = ls

print ([k for k in lasAssign if len(lasAssign[k]) < 1])

for la in lasAssign.keys():
	print(la)

for asi in assignments:
	print ('----' + asi + '----')
	for a in assignments[asi]:
		print (a)
	print ('\n')
