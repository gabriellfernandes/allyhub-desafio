import { forwardRef } from "react";
import { Group, Text } from "@mantine/core";
import { ItemProps } from "../../../interfaces/registerInterface/registerInterface";


export const SelectItems = forwardRef<HTMLDivElement, ItemProps>(
  ({  label, country_code, value, ...others}: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <div>
          <Text></Text>
          <Text size="xs" color="dimmed">
            {`${label}, ${country_code ?  country_code : value}`}
          </Text>
        </div>
      </Group>
    </div>
  )
);
