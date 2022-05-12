import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { InitialState, RootDispatcher } from "../store/root-reducer";

interface Props {}

interface StateProps {
  name: string;
  address: string;
}

const ReduxHooksComponent: React.FC<Props> = () => {
  const { name, address } = useSelector<InitialState, StateProps>(
    (state: InitialState) => {
      return {
        name: state.name,
        address: state.address,
      };
    }
  );

  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);

  return (
    <Form layout="inline">
      <Form.Item>
        <Input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            rootDispatcher.updateName(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="address"
          value={address}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            rootDispatcher.updateAddress(e.target.value);
          }}
        />
        <Button htmlType="submit" type="primary">
          {" "}
          Submit{" "}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReduxHooksComponent;
