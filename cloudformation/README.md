https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html

login to cvmahesh_admin
aws cloudformation create-stack \
  --region us-west-2 \
  --stack-name mcv-eks-vpc-stack \
  --template-url https://s3.us-west-2.amazonaws.com/amazon-eks/cloudformation/2020-10-29/amazon-eks-vpc-private-subnets.yaml


cd /Users/maheshcv/workspace/devops/cloudformation

aws iam create-role \
  --role-name mcvAmazonEKSClusterRole \
  --assume-role-policy-document file://"eks-cluster-role-trust-policy.json"

            (base) Maheshs-iMac:cloudformation maheshcv$ aws iam create-role \
            >   --role-name mcvAmazonEKSClusterRole \
            >   --assume-role-policy-document file://"eks-cluster-role-trust-policy.json"
            {
                "Role": {
                    "Path": "/",
                    "RoleName": "mcvAmazonEKSClusterRole",
                    "RoleId": "AROA4SDNVUHB4KGW36FSC",
                    "Arn": "arn:aws:iam::863518433731:role/mcvAmazonEKSClusterRole",
                    "CreateDate": "2024-09-08T04:02:47+00:00",
                    "AssumeRolePolicyDocument": {
                        "Version": "2012-10-17",
                        "Statement": [
                            {
                                "Effect": "Allow",
                                "Principal": {
                                    "Service": "eks.amazonaws.com"
                                },
                                "Action": "sts:AssumeRole"
                            }
                        ]
                    }
                }
            }
            (base) Maheshs-iMac:cloudformation maheshcv$



aws iam attach-role-policy \
  --policy-arn arn:aws:iam::aws:policy/AmazonEKSClusterPolicy \
  --role-name mcvAmazonEKSClusterRole



aws eks update-kubeconfig --region us-west-2 --name mcv-cluster-1


aws eks update-kubeconfig --region region-code --name my-cluster


aws iam create-role \
  --role-name mcvAmazonEKSNodeRole \
  --assume-role-policy-document file://"node-role-trust-policy.json"


aws iam attach-role-policy \
  --policy-arn arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy \
  --role-name mcvAmazonEKSNodeRole
aws iam attach-role-policy \
  --policy-arn arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly \
  --role-name mcvAmazonEKSNodeRole
aws iam attach-role-policy \
  --policy-arn arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy \
  --role-name mcvAmazonEKSNodeRole


  



 680  kubectl apply -f nginx-pod.yaml
  681  kubectl get pods
  682  kubectl get pods
  683  kubectl describe nginx
  684  kubectl describe pod nginx
  685  kubectl get pods -A
  686  kubectl describe pod coredns-787cb67946-44sdk
  687  kubectl describe pod coredns-787cb67946-44sdk -n kube-system
  688  history
  689  kubectl get pods -A
  690  kubectl apply -f nginx-pod.yaml
  691  kubectl get pods -A
  692  kubectl get pods -A
  693  history
  694  kubectl get pods -A
  695   kubectl describe pod nginx
  696   kubectl delete pod nginx
  697  kubectl run nginx
  698  history
  699  kubectl run nginx --image=nginx
  700   kubectl describe pod nginx
  701  history
  702  kubectl get pods -A
  703  kubectl get pods -A
  704  kubectl get pods -A -o wide
  705  kubectl delete pod nginx
  706  history
  707  kubectl run nodejs
  708  kubectl run nodejs --image=nodejs
  709  kubectl get pods
  710  kubectl describe pods
  711  kubectl describe pods
  712  history 100