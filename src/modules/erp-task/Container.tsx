import { AppLayout } from "@/components/layout/Layout";
import { Button, Card, Descriptions } from "antd";

export const ErpTaskContainer = () => {
  return (
    <AppLayout>
      <Card>
        <Descriptions
          bordered
          title="Descriptions"
          size="small"
          extra={<Button type="primary">Edit</Button>}
          items={[
            {
              key: "1",
              label: "Product",
              children: "Cloud Database",
            },
            {
              key: "2",
              label: "Billing",
              children: "Prepaid",
            },
            {
              key: "3",
              label: "Time",
              children: "18:00:00",
            },
            {
              key: "4",
              label: "Amount",
              children: "$80.00",
            },
            {
              key: "5",
              label: "Discount",
              children: "$20.00",
            },
            {
              key: "6",
              label: "Official",
              children: "$60.00",
            },
            {
              key: "7",
              label: "Config Info",
              children: (
                <>
                  Data disk type: MongoDB
                  <br />
                  Database version: 3.4
                  <br />
                  Package: dds.mongo.mid
                  <br />
                  Storage space: 10 GB
                  <br />
                  Replication factor: 3
                  <br />
                  Region: East China 1
                  <br />
                </>
              ),
            },
          ]}
        />
      </Card>
    </AppLayout>
  );
};
